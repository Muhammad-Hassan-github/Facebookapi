const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const FacebookAdsApi = require('facebook-nodejs-ads-sdk').FacebookAdsApi;
    const api = FacebookAdsApi.init("EAAox55mCGLcBAPD2nodZB0mttIljtZCI2ZBgE0ReodzeTT7jsiNOx4nMdjHUIeUcmavSyMBbY2kLdZB8ASvvcOb4FGpaLB8lcvDZBsk1JUVZCBLnHhqd5EuIKiyKTK5LcZCWEW1h3kMZCkGypdoTRVfvxIPNsRGWBe7G3ga7a8uQYOrUyZBYBMQ25ZCht5jHDqvEQZD")

    // instantiating an object
    // const AdAccount = require('facebook-nodejs-ads-sdk').AdAccount;
    // const account = new AdAccount("2869620549753015");
    // console.log(account.id) // fields can be accessed as properties
    // res.send(account)

    const adsSdk = require('facebook-nodejs-ads-sdk');
    const AdAccount = adsSdk.AdAccount;
    const account = new AdAccount('2869620549753015');
    account
        .read([AdAccount.Fields.name])
        .then((account) => {
            // logPassedTest(test1 + ':Pass', account);

            res.send(account)
        })
        .catch((error) => {

            res.send(error)


        });

    //     const adsSdk = require('facebook-nodejs-ads-sdk');
    //     const AdAccount = adsSdk.AdAccount;
    //     const Campaign = adsSdk.Campaign;
    //     const account = new AdAccount('2869620549753015');

    //     console.log(account.id) // fields can be accessed as properties
    //     account
    //         .createCampaign(
    //             [Campaign.Fields.Id],
    //             {
    //                 // [Campaign.Fields.name]: 'Page likes campaign', // Each object contains a fields map with a list of fields supported on that object.
    //                 // [Campaign.Fields.status]: Campaign.Status.paused,
    //                 // [Campaign.Fields.objective]: Campaign.Objective.page_likes
    //             }
    //         )
    //         .then((result) => {
    //             res.send( "result"+result)
    //         })
    //         .catch((error) => {
    //             res.send( "Error",error)

    //         });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))