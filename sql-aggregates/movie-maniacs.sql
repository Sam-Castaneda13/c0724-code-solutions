select "customers"."firstName" as "First",
       "customers"."lastName" as "Last",
       sum("payments"."amount") as "total"
    from "payments"
    join "customers" using ("customerId")
    group by "customers"."customerId"
    order by "total" desc
