# TODO: Fix CORS Error in Deployed App

## Tasks
- [x] Set global axios baseURL in client/src/index.js using REACT_APP_API_URL
- [x] Remove hardcoded baseURL from client/src/components/AdminLogin.js
- [x] Verify all axios calls use relative paths
- [ ] Test the fix locally and in production

## Followup Steps
- Set REACT_APP_API_URL environment variable in Vercel to the Render backend URL
- Deploy and test the frontend on Vercel
