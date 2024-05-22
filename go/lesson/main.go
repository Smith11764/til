package main

import (
	"fmt"
)

// hello world
/*
	複数行のコメント
	複数行のコメント
*/
func outer() {
	var s4 string = "outer"
	fmt.Println(s4)
}
func main() {
	// 変数
	// var 変数名　型 = 値
	var i int = 100
	fmt.Println(i)

	var s string = "Hello Go"
	fmt.Println(s)

	var t, f bool = true, false
	fmt.Println(t, f)

	var (
		i2 int = 200
		s2 string = "Golang"
	)
	fmt.Println(i2, s2)

	var i3 int
	var s3 string
	fmt.Println(i3, s3)

	i3 = 300
	s3 = "Go"

	outer()
}
