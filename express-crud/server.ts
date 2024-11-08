import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
  select *
  from "grades"
  `;
    const results = await db.query(sql);
    const check = results.rows;
    if (!check) throw new ClientError(404, 'Could not load grades');
    res.status(200).json(check);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (gradeId === undefined) {
      throw new ClientError(400, 'gradeId is undefined');
    }
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;
    const params = [gradeId];
    const results = await db.query(sql, params);
    const getGradeId = results.rows[0];
    if (!getGradeId) throw new ClientError(404, `${gradeId} could not load`);
    res.status(200).json(getGradeId);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (name === undefined) {
      throw new ClientError(400, 'name is undefined');
    }
    if (course === undefined) {
      throw new ClientError(400, 'course is undefined');
    }
    if (score === undefined) {
      throw new ClientError(400, 'score is undefined');
    }
    if (!Number.isInteger(+score)) {
      throw new ClientError(400, 'Score is not a integer');
    }

    const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
    const params = [name, course, score];
    const results = await db.query(sql, params);
    const post = results.rows[0];
    if (!post) throw new ClientError(404, 'Could not load Post');
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (name === undefined) {
      throw new ClientError(400, 'name is undefined');
    }
    if (course === undefined) {
      throw new ClientError(400, 'course is undefined');
    }
    if (score === undefined) {
      throw new ClientError(400, 'score is undefined');
    }
    if (!Number.isInteger(+score)) {
      throw new ClientError(400, 'Score is not a integer');
    }

    const { gradeId } = req.params;
    if (gradeId === undefined) {
      throw new ClientError(400, 'the gradeId is undefined');
    }

    const sql = `
    update "grades"
    set
      name = $2,
      course = $3,
      score = $4
    where "gradeId" = $1
    returning *
    `;

    const params = [gradeId, name, course, score];
    const results = await db.query(sql, params);
    const update = results.rows[0];
    if (!update) throw new ClientError(404, 'Could not load the update');
    res.status(200).json(update);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (gradeId === undefined) {
      throw new ClientError(400, 'GradeId is undefined');
    }

    const sql = `
  delete
    from "grades"
    where "gradeId" = $1
    returning *
  `;
    const params = [gradeId];
    const results = await db.query(sql, params);
    const deleting = results.rows[0];
    if (!deleting) throw new ClientError(404, `Could not load ${deleting} Id`);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
