select "films"."releaseYear" as "films",
       "genres"."name" as "genres"
    from "filmGenre"
    join "films" using ("filmId")
    join "genres" using ("genreId")
    where "films"."title" = 'Boogie Amelie'
