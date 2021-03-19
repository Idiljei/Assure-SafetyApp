SELECT users.first_name as user, a.first_name, a.phone_number, a.current_location
FROM safety_networks JOIN users ON safety_networks.sn_id = users.id
JOIN users a ON safety_networks.user_id = a.id 
WHERE users.id = 3;