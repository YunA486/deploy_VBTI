from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    # 참여자 수와 같이 변하는 데이터
    path('', views.index, name='index'),
    path('form/', views.form, name='form'),
    path('submit/', views.submit, name='submit'),
    path('result/<int:vegetable_id>', views.result, name='result'),
    path('all_results/', views.all_results, name='all_results'),
    path('loading/', views.loading, name='loading'),
]