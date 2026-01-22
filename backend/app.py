from flask import Flask, request, jsonify
from flask_cors import CORS
from google_sheets import save_alumni_data, save_contact_data, save_admission_inquiry

app = Flask(__name__)

# ✅ FULL CORS CONFIG (preflight-safe)
CORS(
    app,
    supports_credentials=True,
    resources={
        r"/api/*": {
            "origins": ["http://localhost:5173"],
            "methods": ["GET", "POST", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    }
)

@app.route("/", methods=["GET"])
def home():
    return "Flask backend is running", 200


@app.route("/api/alumni/register", methods=["POST"])
def alumni_register():
    try:
        data = request.get_json(force=True)

        if not data:
            return jsonify({"error": "No data received"}), 400

        save_alumni_data(data)

        return jsonify({
            "success": True,
            "message": "Alumni registered successfully"
        }), 200

    except Exception as e:
        print("BACKEND ERROR:", e)
        return jsonify({
            "success": False,
            "error": "Internal Server Error"
        }), 500

@app.route("/api/contact/submit", methods=["POST"])
def submit_contact():
    try:
        data = request.get_json()
        save_contact_data(data)
        return jsonify({"success": True}), 200
    except Exception as e:
        print("CONTACT ERROR:", e)
        return jsonify({"success": False}), 500

@app.route("/api/admission/inquiry", methods=["POST"])
def admission_inquiry():
    try:
        data = request.get_json()
        print("📥 ADMISSION DATA:", data)

        save_admission_inquiry(data)

        return jsonify({
            "success": True,
            "message": "Admission inquiry submitted successfully"
        }), 200

    except Exception as e:
        print("❌ ADMISSION ERROR:", e)
        return jsonify({
            "success": False,
            "error": "Internal Server Error"
        }), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
