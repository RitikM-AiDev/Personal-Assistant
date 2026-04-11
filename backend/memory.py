from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings
import os
from dotenv import load_dotenv
from langchain_community.vectorstores import Chroma

load_dotenv(override=True)

embedded = GoogleGenerativeAIEmbeddings(
    google_api_key=os.getenv("GOOGLE_API_KEY"),
    model="models/gemini-embedding-001"
)

db = Chroma(
    embedding_function=embedded,
    persist_directory="./persistant_memory",
    collection_name="user_info"
)

db.add_texts([
    "Ml is a launguage to train model studied in artificial intelligence and machine learning course",
    "Ritik Wake up at 6AM daily and sleep at 9PM",
])

result = db.similarity_search("I wake at 8Pm",k=1)
print(result[0].page_content)