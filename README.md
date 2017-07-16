# bsa-hw-04


# Message

## GET /api/message/<id_number>
Return message with <id_number>
* 200 - in case of success
* 400 - message not found

## POST /api/message
Saves message with properties defined in request body
* 200 - added message

## PUT /api/message/<id_number>
Update message with <id_number>
* 200 - updated successfully
* 400 - message not found

## DELETE /api/message/<id_number> 
Deletes message with selected <id_number> 
* 200 - message deleted successfully
* 400 - message not found

# User

## GET /api/user/<id_number>
Return user with <id_number>
* 200 - user found
* 400 - user not found

## GET /api/user/<id_number>/chatwith
Return all users whom user with <id_number> chatted with 
* 200 - loaded wanted users
* 400 - user not found

## POST /api/user
Create user with properties set in the  request body.
* 200 - user added successfully

## PUT /api/user/<id_number>
Update user with the given id by setting his properties with ones provided in the body.
* 200 - user updated successfully
* 400 - user not found

## DELETE /api/user/<id_number>
Deletes message with selected <id_number> 
* 200 - user deleted successfully
* 400 - user not found