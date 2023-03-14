const key = 'a75041e12f624a2abb49fbdd1660488f'
// a75041e12f624a2abb49fbdd1660488f



const requests = {
    headline: `https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}`,
    israel: `https://newsapi.org/v2/top-headlines?country=il&apiKey=a75041e12f624a2abb49fbdd1660488f`,
    ukraine: `https://newsapi.org/v2/top-headlines?country=ua&apiKey=a75041e12f624a2abb49fbdd1660488f`,
    // sports: `https://newsapi.org/v2/top-headlines?apiKey=${key}&category=sports&language=en`,
    // tech: `https://newsapi.org/v2/top-headlines?apiKey=${key}&category=technology&language=en`,
    // politics: `https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}&category=technology&pageSize=40`
}
export default requests;



