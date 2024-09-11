select "countries"."name",
       count(*)
    from "countries"
    join "cities" using ("countryId")
    group by "countries"."countryId"
