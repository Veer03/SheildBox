from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

# panada  df.head-> the head 
          #df.tail-> the last cell 
          # df info!
          #  df.describe
          # df.columns
          #df. index
import pandas as pd
from io import BytesIO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def check_engine():
    return {"message": "DocuFlow Engine is Online!"}

@app.post("/api/split")
async def split_excel(file: UploadFile = File(...)):
    contents = await file.read()
    df = pd.read_excel(BytesIO(contents))
    employee_count = df['Business Unit'].nunique()
    return {"message": f"Found {employee_count} employees in the sheet"}