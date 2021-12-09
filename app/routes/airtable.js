import Route from '@ember/routing/route';

export default class AirtableRoute extends Route {
  async model(params) {
    // console.log(params.page_number);

    let response1 = await fetch(
      'http://localhost:3000',
    );

    let res = [];
    let obj = {};
    let data = await response1.json();
    data.forEach((element) => {
    //  console.log(element)
      obj = {
        headline: element.fields.headline,
        subHeadline: element.fields.subHeadline,
        imageUrl: element.fields.imageUrl,
      };
      res.push(obj);

    });
//console.log(res1)
  return res;

  //   let response = await fetch(
  //     'https://api.airtable.com/v0/app87CptkwS3cfwcj/airtabale?api_key=keylePL6SggTzfnH5'
  //   );
  //   let data = await response.json();
  //   //console.log(data)
  //   // //return data.records;
  //   //
  //   let res = [];
  //   let obj = {};
  //   let urlImgToString, indexStart, indexEnd, imageUrl;
  //   const step = 3;
  //   let intPageNumber = parseInt(params.page_number) - 1;
  //   let counter = 0;
  //   let startFrom = intPageNumber * step;
  //   data.records.forEach((element) => {
  //     // for (
  //     //   let i = startFrom;
  //     //   counter < step && i < data.records.length;
  //     //   i++, counter++
  //     // ) {
  //     //   let element = data.records[i];
  //     if (typeof element.fields['Header image'] != 'undefined') {
  //       urlImgToString = element.fields['Header image'] + '';
  //       indexStart = urlImgToString.indexOf('https://');
  //       indexEnd = urlImgToString.length - indexStart - 1;
  //       imageUrl = urlImgToString.substr(indexStart, indexEnd);
  //     } else imageUrl = '';
  //
  //     obj = {
  //       headline: element.fields.Headline,
  //       subHeadline:
  //         typeof element.fields['Sub-headline'] === 'undefined'
  //           ? ''
  //           : element.fields['Sub-headline'],
  //       // 'imageUrl': (typeof element.fields['Header image'] === 'undefined')?
  //       //     "" : element.fields['Header image'],
  //       imageUrl: imageUrl,
  //     };
  //     res.push(obj);
  //   });
  //   // }
  // console.log(res)
  //   //
  //    return res;
  }
}
