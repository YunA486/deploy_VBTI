from django.contrib import admin
from django.urls import path, include
from main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # 참여자 수와 같이 변하는 데이터
    path('', include('main.urls')),
]