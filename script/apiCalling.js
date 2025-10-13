
async function apicallChecking(){
    let url = `http://localhost:8083/api/v1/staff/getAllStaffList`
    let option = {
        method:"GET",
        Headers:{
            "accept":"application/json",
            "content-type":"application/json"
        }
    }
    let response = await fetch(url,option)
    let responseData = await response.json()


    console.log("responseData====>",responseData)
}

apicallChecking()