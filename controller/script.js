const request =require('request');
const cheerio = require('cheerio');

   let links=[];
   let title=[];
   let author=[];
   let tags=[];
  
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

            var Ael = $('h2');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);
            
                if(i<10)
                 title.push($(el).text());
            }

            var Ael = $('h4');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);
            
                if($(el).attr().class!=undefined && $(el).attr().class.length==38)
                   author.push($(el).text());
            }

            var Ael = $('a');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);
            
                if($(el).attr().class!=undefined && $(el).attr().class.length==2 && $(el).children().length==1 && tags.includes($(el).text())==false)
                  {tags.push($(el).text());}
            }

            console.log(links);
            console.log(title);
            console.log(author);
            console.log(tags);
        }
    });
