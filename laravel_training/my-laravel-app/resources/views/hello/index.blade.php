@extends('layouts.helloapp')

@section('title', 'Index')

@section('menubar')
    @parent
    インデックスページ
@endsection

@section('content')
    <p>ここが本文のコンテンツです。</p>
    <p>必要な分だけ記述できます。</p>
    <table>
        @foreach ($data as $item)
            <tr>
                <th>{{$item['name']}}</th>
                <td>{{$item['mail']}}</td>
            </tr>
        @endforeach
    </table>
@endsection

@section('footer')
    copyright 2020 tuyano.
@endsection
