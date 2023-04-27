export default async function handler(request, res) {
    var catalog= [
    {
      "startTime":"0",
      "endTime":"15",
      "title": "1",
      "widthSize":"10",
    },
    {
        "startTime":"0",
        "endTime":"40", 
        "title": "2",
        "widthSize":"20",
    },
    {
        "startTime":"0",
        "endTime":"35",
        "title":"3",
        "widthSize":"30"
    }



    ];
    
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(catalog);
  }