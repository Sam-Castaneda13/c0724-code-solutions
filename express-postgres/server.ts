import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const app = express();

pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use((req, res, next) => {
  console.log('The date is', new Date());
  next();
});

app.get('/api/actors', async (req, res, next) => {
  try {
    const sql = `
    select
      "actorID",
      "firstName",
      "lastName"
    from "actors";
    `;
    const result = await db.query(sql);
    const actors = result.rows;
    res.send(actors);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select
      "title",
      "filmId",
      "replacementCost"
    from "films"
    order by "replacementCost" desc
    `;
    const results = await db.query(sql);
    const films = results;
    if (!films) {
      throw new ClientError(404, `films not found`);
    }
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
    select
      "title"
    from "films"
    where "filmId" = $1`;

    const params = [filmId];
    const results = await db.query(sql, params);
    const film = results.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
    update "films"
    set "title" = $2
    where "filmId" = $1
    returning *`;
    const params = [filmId, title];
    const results = await db.query(sql, params);
    const film = results.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
