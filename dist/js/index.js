
$.ajax({
    url:'https://testapi.sixwallz.com/api/v1/neighborhood/',
    headers:{'Authorization':'Token eb02d455aabbd1c420015a7638e8b522a83dea6f'},
    data:{'neighborhoodId': "150932" },
    type:'GET',
    dataType: 'json',
    contentType: 'application/json; charset=utf-8',
    success: function (result) {
        // CallBack(result);
        console.log(result)
     },
            error: function (error) {
                    console.log(error)
            }
})