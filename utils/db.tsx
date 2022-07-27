import axios from 'axios'

function addEntry(tableId: number, value: string) {
  if (!value) return

  axios({
    method: "POST",
    url: `https://based.nachtalb.io/api/database/rows/table/${tableId}/?user_field_names=true`,
    headers: {
      Authorization: "Token q2RscvnpXgmIzyyxl4YNi3dptX3oeuzQ",
      "Content-Type": "application/json"
    },
    data: {
      "Password": value
    }
  })
}

export { addEntry }
