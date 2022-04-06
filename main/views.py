from django.shortcuts import render, redirect
from .models import Question, Vegetable, Choice

def index(request):
    vegetables = Vegetable.objects.all()
    
    # 참여자 수 전체
    i = 0
    for vegetable in vegetables:
        i += vegetable.count
    
    # print(f'cnt : { i }')
    
    context = {
        'vegetables' : vegetables,
        'cnt' : i,
    }
    
    return render(request, 'main/index.html', context=context)


def form(request):
    questions = Question.objects.all()
    
    context = {
        'questions' : questions,
    }
    
    return render(request, 'main/form.html', context=context)

def submit(request):    
    # 문항 수
    N = Question.objects.count()
    # 채소 유형 수
    K = Vegetable.objects.count()
    # print(f'문항 수 : {N}, 채소 유형 수 : {K}')
    
    counter = [0] * (K + 1)
    
    # print(f'POST : {request.POST}')
    
    for n in range(1, N+1):
        vegetable_id = int(request.POST[f'question-{n}'][0])
        counter[vegetable_id] += 1
        
    # 채소의 최고점 개발 유형
    best_vegetable_id = max(range(1, K+1), key=lambda id : counter[id])
    best_vegetable = Vegetable.objects.get(pk=best_vegetable_id)
    best_vegetable.count += 1
    best_vegetable.save()
    
    context = {
        'vegetable' : best_vegetable,
        'counter' : counter
    }
    
    return redirect('main:result', vegetable_id=best_vegetable_id)

def result(request, vegetable_id):
    vegetable = Vegetable.objects.get(pk=vegetable_id)
    context = {
        'vegetable' : vegetable,
    }
    return render(request, 'main/result.html', context=context)

def all_results(request):
    return render(request, 'main/all_results.html')

def loading(request):
    return render(request, 'main/loading.html')