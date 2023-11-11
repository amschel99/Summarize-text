from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world.From Rohit Luni. You're at the Chotila.")
