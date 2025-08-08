package handlers 


import (
	"github.com/gin-gonic/gin"
	"github.com/otiai10/gosseract/v2"
	"net/http"
)

func ProcessDocument(c *gin.Context) {
	//Test gosseract can find tesseract installation
	client := gosseract.NewClient()
	defer client.Close()

	// Simple test to verify OCR library works
	client.SetImage("test")

	c.JSON(http.StatusOK, gin.H{
		"message": "OCR handler created",
		"tesseract_path": "/opt/homebrew/bin/tesseract",
		"status": "ready for file upload implementation",
	})
}