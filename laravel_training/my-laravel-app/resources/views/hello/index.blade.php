@extends('layouts.helloapp')

@section('title', 'Index')

@section('menubar')
    @parent
    インデックスページ
@endsection

@section('content')
    <p>ここが本文のコンテンツです。</p>
    <p>必要な分だけ記述できます。</p>
@endsection

@section('footer')
    copyright 2020 tuyano.
@endsection
