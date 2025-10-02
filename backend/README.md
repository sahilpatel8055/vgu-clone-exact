# VGU Backend - Google Sheets Integration

This backend handles form submissions and saves them to Google Sheets.

## Deployment on Render

### Step 1: Push to GitHub
1. Create a new GitHub repository
2. Push this backend folder to the repository

### Step 2: Create Web Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: vgu-backend
   - **Root Directory**: backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (or paid for production)

### Step 3: Add Environment Variables in Render
Go to "Environment" tab and add these variables:

1. **GOOGLE_PROJECT_ID**: `web-leads-468616`
2. **GOOGLE_PRIVATE_KEY_ID**: `5da6147e9af723f697b5c480ae891d19c4c2c01f`
3. **GOOGLE_PRIVATE_KEY**: (Paste your entire private key from the JSON file, including BEGIN and END markers)
4. **GOOGLE_CLIENT_EMAIL**: `web-leads@web-leads-468616.iam.gserviceaccount.com`
5. **GOOGLE_CLIENT_ID**: `111616550981008162259`
6. **GOOGLE_CERT_URL**: `https://www.googleapis.com/robot/v1/metadata/x509/web-leads%40web-leads-468616.iam.gserviceaccount.com`
7. **GOOGLE_SHEET_ID**: `1bcp4UNpXdUFaaia3kpXsLTVFW_9eT8i2OpuAXSwJoIY`

### Step 4: Deploy
Click "Create Web Service" and wait for deployment to complete.

### Step 5: Update Frontend
After deployment, Render will give you a URL like: `https://vgu-backend.onrender.com`

Update this URL in your frontend code:
- `src/components/HeroSection.tsx`
- `src/components/CounselingFormDialog.tsx`

Replace `YOUR_RENDER_BACKEND_URL` with your actual Render URL.

## Local Development

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create `.env` file (copy from `.env.example`)
3. Add your Google credentials
4. Run the server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

## API Endpoints

### GET /
Health check endpoint

### POST /api/submit-form
Submit form data to Google Sheets

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "course": "BCA",
  "state": "Maharashtra",
  "city": "Mumbai",
  "profession": "Student",
  "gender": "Male"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```
