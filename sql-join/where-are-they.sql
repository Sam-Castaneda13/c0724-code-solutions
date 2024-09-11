select "addresses"."line1" as "addresses",
       "addresses"."district",
       "cities"."name" as "cities"
  from "addresses"
  join "cities" using ("cityId")
