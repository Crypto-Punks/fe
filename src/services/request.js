const request = (url, method, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => {
      if(!res.ok) {
        return res.json()
          .then(error => {
            if(error.message) throw error.message;
            else {
              throw `Unable to fetch from ${url}`;
            }
          });
      } else {
        return res.json();
      }
    });
};


    
// return res.json();
// });


    
// .then((res) => {
// console.log(res);
// if(!res.ok) {
//   return res.json()
//     .then(err => {
//       console.log(err);
//       throw err;
//     });
// .catch(err => {
//   if(regExIncludesMDBErr(err.message, 'url-shortener-be.users')) {
//     throw 'Username already taken. Please choose another.';
//   }
//   else if(err.message === 'Invalid username or password') {
//     throw err.message;
//   }
//   else if(regExIncludesMDBErr(err.message, 'url-shortener-be.urls')) {
//     const text = err.shortUrlText ? err.shortUrlText : 'Shortened Url';
//     throw `${text} already exists. Please choose another name`;
//   }
//   else {
//     throw `Unable to fetch from ${url}`;
//   }
// });
// }
// else {
//   return res.json();
// }
// });


// function regExIncludesMDBErr(string, collection) {
//   if(RegExp(/(^E11000)/).test(string) && string.includes(collection)) {
//     return true;
//   }
//   return false;
// }


export const post = (url, body) => request(url, 'POST', body);
export const get = url => request(url, 'GET');
export const put = (url, body) => request(url, 'PUT', body);
export const patch = (url, body) => request(url, 'PATCH', body);
export const del = url => request(url, 'DELETE');
