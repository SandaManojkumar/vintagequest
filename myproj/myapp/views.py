from django.shortcuts import render
from django.http import HttpResponse
def hello(request):

    return render(request,'index.html')

def shops(request):
    return render(request,'shop.html')

def blog(request):
    return render(request,'blog.html')

def login(request):
    return render(request,'Login.html')

def signup(request):
    return render(request,'Signup.html')

def forgot(request):
    return render(request,'forgot.html')

def contact(request):
    return render(request,'contact.html')

def terms(request):
    return render(request,'terms.html')

def about(request):
    return render(request,'about.html')

def cart(request):
    return render(request,'cart.html')