import axios from 'axios'
const FORMS_API = "https://d3ul21vxig.execute-api.us-west-2.amazonaws.com/prod/handle-entry"

export default function formHandler(fields) {
  return axios({
    method: 'post',
    url: FORMS_API,
    data: fields,
  })
}
