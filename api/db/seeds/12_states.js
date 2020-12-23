const TABLE = 'states'
const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(TABLE)
    .del()
    .then(function() {
      // Inserts seed entries
      return knex(TABLE).insert([
        { id: 1, code: 'AL', name: 'Alabama', country_id: 1 },
        { id: 2, code: 'AK', name: 'Alaska', country_id: 1 },
        { id: 4, code: 'AZ', name: 'Arizona', country_id: 1 },
        { id: 5, code: 'AR', name: 'Arkansas', country_id: 1 },
        { id: 6, code: 'CA', name: 'California', country_id: 1 },
        { id: 8, code: 'CO', name: 'Colorado', country_id: 1 },
        { id: 9, code: 'CT', name: 'Connecticut', country_id: 1 },
        { id: 10, code: 'DE', name: 'Delaware', country_id: 1 },
        { id: 11, code: 'DC', name: 'District of Columbia', country_id: 1 },
        { id: 12, code: 'FL', name: 'Florida', country_id: 1 },
        { id: 13, code: 'GA', name: 'Georgia', country_id: 1 },
        { id: 15, code: 'HI', name: 'Hawaii', country_id: 1 },
        { id: 16, code: 'ID', name: 'Idaho', country_id: 1 },
        { id: 17, code: 'IL', name: 'Illinois', country_id: 1 },
        { id: 18, code: 'IN', name: 'Indiana', country_id: 1 },
        { id: 19, code: 'IA', name: 'Iowa', country_id: 1 },
        { id: 20, code: 'KS', name: 'Kansas', country_id: 1 },
        { id: 21, code: 'KY', name: 'Kentucky', country_id: 1 },
        { id: 22, code: 'LA', name: 'Louisiana', country_id: 1 },
        { id: 23, code: 'ME', name: 'Maine', country_id: 1 },
        { id: 24, code: 'MD', name: 'Maryland', country_id: 1 },
        { id: 25, code: 'MA', name: 'Massachusetts', country_id: 1 },
        { id: 26, code: 'MI', name: 'Michigan', country_id: 1 },
        { id: 27, code: 'MN', name: 'Minnesota', country_id: 1 },
        { id: 28, code: 'MS', name: 'Mississippi', country_id: 1 },
        { id: 29, code: 'MO', name: 'Missouri', country_id: 1 },
        { id: 30, code: 'MT', name: 'Montana', country_id: 1 },
        { id: 31, code: 'NE', name: 'Nebraska', country_id: 1 },
        { id: 32, code: 'NV', name: 'Nevada', country_id: 1 },
        { id: 33, code: 'NH', name: 'New Hampshire', country_id: 1 },
        { id: 34, code: 'NJ', name: 'New Jersey', country_id: 1 },
        { id: 35, code: 'NM', name: 'New Mexico', country_id: 1 },
        { id: 36, code: 'NY', name: 'New York', country_id: 1 },
        { id: 37, code: 'NC', name: 'North Carolina', country_id: 1 },
        { id: 38, code: 'ND', name: 'North Dakota', country_id: 1 },
        { id: 39, code: 'OH', name: 'Ohio', country_id: 1 },
        { id: 40, code: 'OK', name: 'Oklahoma', country_id: 1 },
        { id: 41, code: 'OR', name: 'Oregon', country_id: 1 },
        { id: 42, code: 'PA', name: 'Pennsylvania', country_id: 1 },
        { id: 44, code: 'RI', name: 'Rhode Island', country_id: 1 },
        { id: 45, code: 'SC', name: 'South Carolina', country_id: 1 },
        { id: 46, code: 'SD', name: 'South Dakota', country_id: 1 },
        { id: 47, code: 'TN', name: 'Tennessee', country_id: 1 },
        { id: 48, code: 'TX', name: 'Texas', country_id: 1 },
        { id: 49, code: 'UT', name: 'Utah', country_id: 1 },
        { id: 50, code: 'VT', name: 'Vermont', country_id: 1 },
        { id: 51, code: 'VA', name: 'Virginia', country_id: 1 },
        { id: 53, code: 'WA', name: 'Washington', country_id: 1 },
        { id: 54, code: 'WV', name: 'West Virginia', country_id: 1 },
        { id: 55, code: 'WI', name: 'Wisconsin', country_id: 1 },
        { id: 60, code: 'AS', name: 'American Samoa', country_id: 1 },
        { id: 64, code: 'FM', name: 'Federated States of Micronesia', country_id: 1 },
        { id: 66, code: 'GU', name: 'Guam', country_id: 1 },
        { id: 68, code: 'MH', name: 'Marshall Islands', country_id: 1 },
        { id: 69, code: 'MP', name: 'Northern Mariana Islands', country_id: 1 },
        { id: 70, code: 'PW', name: 'Palau', country_id: 1 },
        { id: 72, code: 'PR', name: 'Puerto Rico', country_id: 1 },
        { id: 74, code: 'UM', name: 'U.S. Minor Outlying Islands', country_id: 1 },
        { id: 78, code: 'VI', name: 'Virgin Islands of the U.S.', country_id: 1 },
      ])
    })

  await knex.raw('select setval(\'' + TABLE + '_id_seq\', max(id)) from ' + TABLE)
}
exports.seed = seed
