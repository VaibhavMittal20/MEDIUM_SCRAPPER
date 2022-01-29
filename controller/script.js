const request =require('request');
const cheerio = require('cheerio');

   let links=[];
   links.length=0;
  
    const webid=`https://medium.com/tag/developer/latest`;
    request(webid,function(err,response,html){
        if(err)
        {
          console.log('error: ',err);
        }

        else
        {
            let $=cheerio.load(html);
           
            var Ael = $('a');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);
            
                if($(el).attr().class!=undefined && $(el).attr().class.length==44 && $(el).children().children().length==2 && $(el).children().length==1)
                {
                    links.push($(el).attr('href'));
                }
            }

            console.log(links);
        }
    });
