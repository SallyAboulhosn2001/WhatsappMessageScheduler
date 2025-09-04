Whatsapp Message Scheduler 
# WhatsApp Message Scheduler

💭 **Imagine scheduling WhatsApp messages that send themselves, without you lifting a finger!**

This is a conceptual project demonstrating automation and AI workflow design using React, Vite, Tailwind CSS, and n8n. The workflow is designed to schedule WhatsApp messages automatically, though it’s currently conceptual and does not use paid WhatsApp APIs.

## 🚀 Project Overview

**WhatsApp Message Scheduler** allows users to:

- Input a recipient's phone number
- Compose a message
- Schedule the time to send the message

The project demonstrates a full-stack workflow, integrating frontend UI design with backend automation logic.

### Tech Stack

- **Frontend:** React + Vite + Tailwind CSS  
- **Workflow Automation:** n8n (Webhook node)  
- **Potential Future Integration/Improvements:** Would like to connect a whatsapp business account using a whatsapp API key

---

## 🔹 Features

1. **User Interface**  
   - Clean, responsive form to schedule messages.
   - Input fields for number, message, and scheduled time.

2. **Automation Workflow (n8n)**  
   - Webhook node receives form data.
   - Workflow designed to trigger messages at the scheduled time.
   - Easily expandable to integrate WhatsApp APIs in the future.

3. **Future Scope**  
   - Support for multiple message types (text, audio, media, document).  
   - Integration with WhatsApp Business API or third-party providers.  
   - End-to-end testing of the workflow with live messaging.

---

## ⚡ How It Works

1. **User fills the form** in the React app and clicks "Schedule Message."
2. **Form data is sent via fetch** to the n8n webhook.
3. **n8n workflow** receives the data and is designed to trigger a scheduled action:
   - Currently conceptual; can be extended with WhatsApp nodes.
4. **Scheduled message logic** (future feature):
   - Wait node to hold until scheduled time.
   - WhatsAppable node (or equivalent) sends message automatically.

---

## 📌 Why This Project Matters

- Demonstrates **full-stack application design** with automation.  
- Combines **UI/UX, frontend development, and workflow automation concepts**.  
- Conceptually ready for **real-world applications**, even without paid API integration.  

---

## 💡 Next Steps

1. Integrate actual WhatsApp messaging API (WhatsAppable or alternatives).  
2. Expand workflow to support additional message types.  
3. Test end-to-end automation.  
4. Potentially host as a portfolio project demonstrating automation and AI concepts.  

---

## ⚙️ Setup & Run Locally

1. **Clone the repository**  
```bash
git clone https://github.com/yourusername/WhatsappMessageScheduler.git
cd WhatsappMessageScheduler

2. **Install dependencies to run the webpage**
npm install
npm run dev
