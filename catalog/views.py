from django.shortcuts import render


def index(request):
    """View function for home page of site."""
    return render(request, "index.html")


def test_one(request):
    """View function for test1 page of site."""
    return render(request, "test1.html")


def test_two(request):
    """View function for test2 page of site."""
    return render(request, "test2.html")


def test_three(request):
    """View function for test3 page of site."""
    return render(request, "test3.html")


def test_four(request):
    """View function for test4 page of site."""
    return render(request, "test4.html")
