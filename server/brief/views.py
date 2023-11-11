from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import openai

SECRET_KEY = os.getenv("SECRET_KEY")
openai.api_key = SECRET_KEY


@csrf_exempt
def summarize_text(request):
    if request.method == "POST":
        data = request.POST.get("text", "")

        if data:
            summary = summarize_text_with_chatgpt(data)
            return JsonResponse({"summary": summary})
        else:
            return JsonResponse({"error": "No text provided."}, status=400)
    else:
        return JsonResponse({"error": "Only POST requests are supported."}, status=405)


def summarize_text_with_chatgpt(text):
    prompt = (
        f"Summarize the following text into a concise summary in under 10 lines: {text}"
    )

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=150,
        n=1,
        stop=None,
        temperature=0.7,
    )

    summary = response.choices[0].text.strip()

    return summary
