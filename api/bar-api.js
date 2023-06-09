export default async function handler(request, res) {
    var catalog= [
    {
      "startTime":"0",
      "endTime":"15",
      "title": "Rspack",
      "widthSize":"20",
    },
    {
        "startTime":"0",
        "endTime":"40", 
        "title": "Webpack(with SWC)",
        "widthSize":"30",
    },
    {
        "startTime":"0",
        "endTime":"35",
        "title":"Webpack(with babel)",
        "widthSize":"40"
    }



    ];
    
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(catalog);
  }