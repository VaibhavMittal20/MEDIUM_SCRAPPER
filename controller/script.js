const request =require('request');
const cheerio = require('cheerio');

   let links=[];
   let title=[];
   let creator=[];
   let tags=[];
   let upload=[];
   let time=[];
   let blog=[];

   links.length=0;
   title.length=0;
   creator.length=0;
   tags.length=0;
   upload.length=0;
   time.length=0;
   blog.length=0;
  
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
                {
                 title.push($(el).text());
                }
            }

            var Ael = $('h4');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);
            
                if($(el).attr().class!=undefined && $(el).attr().class.length==38)
                {
                   creator.push($(el).text());
                }
            }

            var Ael = $('a');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);
            
                if($(el).attr().class!=undefined && $(el).attr().class.length==2 && $(el).children().length==1 && tags.includes($(el).text())==false)
                {
                  tags.push($(el).text());
                }
            }

            var Ael = $('p');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);

                if($(el).attr().class.length==34)
                {
                   upload.push($(el).text());  
                }    
            }

            var Ael = $('span');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);

                if($(el).attr().class!=undefined && $(el).attr().class.length==13 && $(el).text().length>1)
                {
                    time.push($(el).text()); 
                }
            }

            var Ael = $('h3');
            for(var i=0; i<Ael.length; i++)
            {
                var el = Ael.eq(i);
                
                if(i>=1 && i<=10)
                {
                  blog.push($(el).text());
                }
            }

            console.log(links);
            console.log(title);
            console.log(creator);
            console.log(tags);
            console.log(upload);
            console.log(time);
            console.log(blog);
        }
    });
