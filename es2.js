var express = require('express');
var path= require('path');
var app = express();
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var port = 8000; 

var url = "https://www.indeed.com/viewjob?jk=29ca8b1973f1671f&q=javascript&l=Denton%2C+TX&tk=1bsb8dun7182n30k&from=web&advn=2026347816704085&sjdu=dgyo340G62DylWYpJtTiiEqDiUrpYwsGOstl-69YSVlVY4EnQ8ofahskiVZ0Sixdur0uK3rsGtnhGnTSb1OugSwvmzdyT_CYig9DplPVB4Y&acatk=1bsb8eb8eafq789d&pub=4a1b367933fd867b19b072952f68dceb"

request(url, function(err, resp, body){
   var $ = cheerio.load(body);
    
   var companyName = $('.company');
   var companyNameText = companyName.text();
    
   var jobTitle = $('.jobtitle font');
   var jobTitleText = jobTitle.text();
    
   var location = $('.location');
   var locationText = location.text();
   
    var summary = $('#job_Summary p');
    var summaryText = summary.text();
   
    var job = {
        jobTitle: jobTitleText,
        location: locationText,
        companyName: companyNameText,
        sumary: summaryText
    }
  
    console.log(job);
})



app.listen(port);
console.log('server is listening on ' + port)