import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
SERVICE_ACCOUNT_FILE = "service_account.json"

# 🔴 USE SPREADSHEET ID (NO NAME ISSUES)
SPREADSHEET_ID = "13A5F1V1ZptNTkZUX_rprZ12W0CkssxS365T9uMBJU3I"
ALUMNI_SHEET_NAME = "Alumni Registrations"


def get_client():
    creds = Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE,
        scopes=SCOPES
    )
    return gspread.authorize(creds)


def save_alumni_data(data):
    client = get_client()

    spreadsheet = client.open_by_key(SPREADSHEET_ID)
    sheet = spreadsheet.worksheet(ALUMNI_SHEET_NAME)

    row = [
        datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        data.get("firstName", ""),
        data.get("lastName", ""),
        data.get("email", ""),
        data.get("phone", ""),
        data.get("batchYear", ""),
        data.get("passingYear", ""),
        data.get("currentOccupation", ""),
        data.get("company", ""),
        data.get("designation", ""),
        data.get("address", ""),
        data.get("city", ""),
        data.get("state", ""),
        data.get("country", ""),
        data.get("achievements", ""),
        data.get("message", ""),
        str(data.get("allowContact", False)),
        str(data.get("newsletter", False)),
    ]

    sheet.append_row(row, value_input_option="USER_ENTERED")

def save_contact_data(data):
    client = get_client()
    spreadsheet = client.open_by_key(SPREADSHEET_ID)
    sheet = spreadsheet.worksheet("Contact Requests")

    row = [
        datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        data.get("name", ""),
        data.get("email", ""),
        data.get("phone", ""),
        data.get("subject", ""),
        data.get("message", ""),
    ]

    sheet.append_row(row, value_input_option="USER_ENTERED")

from datetime import datetime

def save_admission_inquiry(data):
    client = get_client()
    spreadsheet = client.open_by_key(SPREADSHEET_ID)
    sheet = spreadsheet.worksheet("Admission Inquiries")

    row = [
        datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        data.get("name", ""),
        data.get("email", ""),
        data.get("phone", ""),
        data.get("class", ""),
        data.get("guardianName", ""),
        data.get("message", ""),
    ]

    sheet.append_row(row, value_input_option="USER_ENTERED")