# local-mobile-foam

The goal: use a personal server ('clay') to keep track of my background location while going about the world. When I get close to a disputed POI or a POI that others have staked rewards on, I receive a local notification to check out the area and contribute to the FOAM map.

## Usage

You can run the server side bits with `node index.js` or use the dockerfile built with `yarn build`.

If you have a clay, you can install the "FOAM Nearby POI" service (this is mocked out for the hackathon).

## TODO

- [ ] write a reference client that uses background location on significant location change to request unknown POIs and then display a local notification, removing the need for APNS/GCM credentials.

## Misc

Example Response

```json
[
  {
    "cst": "0x0661a22088f60194c64aeb4ff6dccf0c870b277db95111e17135140a7bbaebdb",
    "createdAt": "2018-12-04T17:24:57Z",
    "radius": "0x3e8",
    "stake": "0x21e19e0c9bab2400000",
    "tokenId": "0x1",
    "owner": "0xab2a19c49ea7422b2889566b96767b67436f582e",
    "geohash": "dr5rs8vrcqm5",
    "nftAddress": "0x36f16a0d35b866cdd0f3c3fa39e2ba8f48b099d2"
  }
]
```
