package main

import (
	"proseries-document-processor/handlers"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"net/http"

)

func main() {
	r := gin.Default()
	r.Use(cors.Default())

	r.GET("/health", func(c *gin.Context){
		c.JSON(http.StatusOK, gin.H{"status": "Backend running"})
	})

	r.POST("/ocr", handlers.ProcessDocument)

	r.Run(":3001")
}