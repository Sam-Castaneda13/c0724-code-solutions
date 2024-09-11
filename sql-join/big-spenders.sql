select "customers"."firstName" as "customers",
       "customers"."lastName",
       "payments"."amount" as "payments"
    from  "customers"
    join "payments" using ("customerId")
    order by "amount" desc
    limit 10
