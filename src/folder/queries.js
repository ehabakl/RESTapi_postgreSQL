const getEntities = "SELECT * FROM entities_table" // entities_table 
const getMembers = "SELECT * FROM members_table"
const getEntityMembers = "SELECT * FROM entities_Members_table"

module.exports = {
    getEntities,
    getMembers,
    getEntityMembers
}