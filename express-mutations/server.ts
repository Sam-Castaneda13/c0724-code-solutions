import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.post('/api/actors', async (req, res, next) => {
  try {
    const sql = `
  insert into "actors" ("firstName", "lastName")
  values ('Brendan', 'Eich')
  returning *
  `;
    const results = await db.query(sql);
    const post = results.rows;
    if (!post) {
      throw new ClientError(404, 'It is missing either firstName or lastName');
    }
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.query;
    if (lastName === undefined) {
      throw new ClientError(400, 'lastName is undefined');
    } else if (firstName === undefined) {
      throw new ClientError(400, 'firstName is undefined');
    }
    const { actorId } = req.params;
    if (actorId === undefined) {
      throw new ClientError(400, 'ActorId is undefined');
    }
    const sql = `
    update "actors"
    set
      "firstName" = $2,
      "lastName" = $3
    where "actorId" = $1
    returning *
    `;
    const params = [actorId, firstName, lastName];
    const results = await db.query(sql, params);
    const update = results.rows;
    if (!update) {
      throw new ClientError(404, 'Could not load actorId');
    }
    res.status(200).json(update);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (actorId === undefined) {
      throw new ClientError(400, 'ActorId is undefined');
    }
    const sql = `
   delete
    from "actors"
    where "actorId" = $1
    returning *
   `;
    const params = [actorId];
    const results = await db.query(sql, params);
    const deleting = results.rows;
    if (!deleting) throw new ClientError(404, 'Could not load deleting');
    res.status(204).json(deleting);
  } catch (err) {
    next(err);
  }
});

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
