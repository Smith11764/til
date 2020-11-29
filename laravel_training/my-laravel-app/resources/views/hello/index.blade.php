@extends('layouts.helloapp')

@section('title', 'Index')

@section('menubar')
    @parent
    インデックスページ
@endsection

@section('content')
    <p>ここが本文のコンテンツです。</p>
    <p>これは、<middleware>google.com</middleware>へのリンクです。</p>
    <p>これは、<middleware>yahoo.co.jp</middleware>へのリンクです。</p>
    {{-- <table>
        @foreach ($data as $item)
            <tr>
                <th>{{$item['name']}}</th>
                <td>{{$item['mail']}}</td>
            </tr>
        @endforeach
    </table> --}}
@endsection

@section('footer')
    copyright 2020 tuyano.
@endsection
