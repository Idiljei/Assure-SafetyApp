SELECT users.first_name, a.first_name, a.phone_number
FROM safety_networks JOIN users ON safety_networks.user_id = users.id
JOIN users a ON safety_networks.sn_id = a.id 
WHERE users.id = 3;