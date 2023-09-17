import cohere # run pip install cohere before you run this
from dotenv import load_dotenv
import os
from twilio.rest import Client

def generateWarning():
    
    load_dotenv("../.env")


    client = Client(os.getenv("ACCOUNT_SID"), os.getenv("AUTH_TOKEN"))

    co = cohere.Client(os.getenv("COHERE_KEY"))
    story = co.generate("In a funny way, give a warning for getting too close to something.",
                stop_sequences=['\n', "."], max_tokens=300)
    message = client.messages.create(
        body=story.generations[0].text,
        from_=os.getenv("TWILIO_PHONE"),
        to=os.getenv("MY_PHONE")
    )

    return story.generations[0].text