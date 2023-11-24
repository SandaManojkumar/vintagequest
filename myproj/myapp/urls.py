from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello, name='index'),
    path('shop/', views.shops, name='shop'),
    path('blog/', views.blog, name='blog'),
    path('contact/', views.contact, name='contact'),
    path('terms/', views.terms, name='terms'),
    path('login/', views.login, name='Login'),
    path('forgot/', views.forgot, name='forgot'),
    path('Signup/', views.signup, name='Signup'),
    path('about/', views.about, name='about'),
    path('cart/', views.cart, name='cart'),
]
