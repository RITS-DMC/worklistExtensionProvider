**1. Clone the Repository**
    - Clone the repository into the following path inside your plugin project: (yourPlugin/webapp/worklistExtensionProvider)
    - Open and Identify data-name in your plugin’s index.html file.
    - Identify the value of the data-name attribute (e.g., rits.custom.plugin.operationpodselection). This will be used in the upcoming search-and-replace operations
	
**2. Search and Replace in the Cloned Folder**
    - Right-click on the cloned folder worklistExtensionProvider.
    - Select "Find in Folder".
    - Perform the following search-and-replace operations:
        i. Replace 1:
            - Use this in the Search field: rits.custom.plugin.operationpodselection
            - Use this in the replace field: with your namespace from the index.html file
            - Click "Replace All Icon".
        ii. Replace 2:
            - Use this in the Search field: rits/custom/plugin/operationpodselection
            - Convert your data-name (e.g., rits.custom.plugin.operationpodselection) to a folder path by replacing dots . with slashes / (e.g., rits/custom/plugin/operationpodselection).
            - Use this in the replace field: with your namespace from the index.html file 
            - Click "Replace All Icon".
			
**3. Update component.json**
    - Open the file: yourPlugin/webapp/designer/component.json
    - Inside the extensions list, add an entry for the plugin with the following structure:
	   after the components:
	   rits/custom/plugin/operationpodselection: this namespace you can take it from the index.html.
	   
          "extensions": [
        {
            "provider": "rits/custom/plugin/operationpodselection/worklistExtensionProvider/ExtensionProvider",
            "controller": "sap.dm.dme.plugins.worklistPlugin",
            "inclusions": [
                {
                    "pods": [
                         "pod1", "pod2"
                    ],
                    "plants": [
                        "plant1", "plant2"
                    ]
                }
            ]
        }
    ]
    **Important Note: After pasting the above JSON:
          i. Ensure provider matches the correct plugin path. It should be: <data-name with slashes>/worklistExtensionProvider/ExtensionProvider. For example, if your data-name is rits.custom.plugin.wilistplugin, then it becomes: rits/custom/plugin/operationpodselection/worklistExtensionProvider/ExtensionProvider.
          ii. Ensure pods and plants are updated based on your actual deployment targets. Replace "pod1", "pod2" and "plant1", "plant2" with real values.**
		  
**4. Build and Deploy Your Plugin**
      - Build your plugin project using your standard build process.
      - Deploy it to your target environment.
	  
**5. Verify the Result**
      - Navigate to the relevant section in your app.
      - Verify that the extension is functioning correctly and is visible for the specified pods and plants defined in the component.json file.
	  
   
