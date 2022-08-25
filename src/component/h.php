public function getdatafrombucket($key){

$rawBody = [
    "key"=> "$key",
];
if(isset($rawBody['key'])){
    $userId = $rawBody['user_id'] ?? $this->di->getUser()->id;
    $filePath = BP . DS . 'var' . DS . 'file' . 'bucket' . DS . $userId  . '_content.txt';
    if (file_exists($filePath)) {
        if (!unlink($filePath)) {
            return ['success' => false, 'message' => 'Error deleting file. Kindly check permission.'];
        }
    }
    $dirname = dirname($filePath);
    if (!is_dir($dirname)) {
        $oldmask = umask(0);
        mkdir($dirname, 0777, true);
        umask($oldmask);
    }
    $fp = fopen($filePath, 'w+');
    $config = include BP . '/app/etc/aws.php';
    $rawBody['bucket'] = "amazon-web-api";
    $s3Client = new S3Client($config);
    $result = $s3Client->getObject(array(
        'Bucket' => $rawBody['bucket'] ?? "amazon-web-api",
        'Key' => $rawBody['key'] ?? "",
        'SaveAs' => $fp
    ));
    fclose($fp);
    $content = json_decode(file_get_contents($filePath));
   
    // $result = [
    //     'success' => true,
    //     'data' => $data,
    //     'response' => $content,
    //     'valid_values' => $validValues,
    //     'variation_theme' => $variation_theme,
    //     'browse_node_attribute' => $browseNodeAttribute,
    // ];
    return $content;

}else{
    return [
        'success'=>false,
        'message'=>'something wrong'
    ];
}
}

public function getAttribute($data){
try {
    if ($shop = $this->getDi()->getRegistry()->getCurrentShop()) {
        $categoryId = isset($data['category_id']) ? $data['category_id'] : '';
        $subCategoryId = isset($data['sub_category_id']) ? $data['sub_category_id'] : '';
        $browseNodeId = isset($data['browse_node_id']) ? $data['browse_node_id'] : false;
        $marketplaceId = isset($shop['marketplace_id']) ? $shop['marketplace_id'] : false;
        if (isset($this::MARKETPLACE_CODE[$marketplaceId])) {
            $key = 'lib'.DS.$this::MARKETPLACE_CODE[$marketplaceId].DS.$data['category_id'].DS.'json'.DS.$data['sub_category_id'].DS.'products.json';
            if($key){
                $browseNodeAttribute = [];
                /** Code added to remove Attributes - If found in BrowserNodeJson - Start **/
                $browseNodeAttributesPath ='lib'.DS.$this::MARKETPLACE_CODE[$marketplaceId].DS.'browseNodeAttributes.json';
                if (file_exists($browseNodeAttributesPath)) {
                    // $browseNodeAttributes = file_get_contents($browseNodeAttributesPath);
                    $browseNodeAttributes = $this->getdatafrombucket($browseNodeAttributesPath);
                    $browseNodeAttributes = json_decode($browseNodeAttributes, true);
                    $browseNodeAttribute = isset($browseNodeAttributes[$data['browse_node_id']])?$browseNodeAttributes[$data['browse_node_id']]:[];
                }
                /** Code added to remove Attributes - If found in BrowserNodeJson - End **/

                $validValues = [];
                $validValuesPath = 'lib' . DS . $this::MARKETPLACE_CODE[$marketplaceId] . DS . $categoryId . DS . 'json' . DS . 'products_all_valid_values.json';
                if (file_exists($validValuesPath)) {
                    $validValuesJson = $this->getdatafrombucket($validValuesPath);
                    // file_get_contents($validValuesPath);
                    if ($validValuesJson) {
                        $validValues = json_decode($validValuesJson, true);
                    }
                }

                $variation_theme = [];
                if ($marketplaceId == 'A21TJRUUN4KGV') {
                    $variation_path = BP . DS . 'app' . DS . 'code' . DS . 'amazonwebapi' . DS . 'lib' . DS . $this::MARKETPLACE_CODE[$marketplaceId] . DS . $categoryId . DS . 'json' . DS . $subCategoryId . DS . 'variation_theme.json';
                    if (file_exists($variation_path)) {
                        $variation_themeJson = file_get_contents($variation_path);
                        if ($variation_themeJson) {
                            $variation_theme = json_decode($variation_themeJson, true);
                        }
                    }
                }
                $content = $this->getdatafrombucket($key);
                   
                $result = [
                    'success' => true,
                    'data' => $data,
                    'response' => $content,
                    'valid_values' => $validValues,
                    'variation_theme' => $variation_theme,
                    'browse_node_attribute' => $browseNodeAttribute,
                ];


                // }
            }
            else{
                $result = ['success' => false, 'message' => 'key is missing'];
                
            } 
         } else {
            $result = [
                'success' => false,
                'data' => $data,
                'msg' => "category not found",
            ];
        }

       
        } else {
            $result = [
                'success' => false,
                'data' => $data,
                'msg' => "shop not found",
            ];

        }
        
        return $result;
    } catch (\Exception $e) {
        return [
            'success' => false,
            'data' => $data,
            'msg' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
        ];
    
    }
}






public function getdatafrombucket($key){

$rawBody = [
    "key"=> "$key",
];
if(isset($rawBody['key'])){
    $userId = $rawBody['user_id'] ?? $this->di->getUser()->id;
   
    $config = include BP . '/app/etc/aws.php';
    $rawBody['bucket'] = "amazon-web-api";
    $s3Client = new S3Client($config);
    try {
        $result = $s3Client->getObject(array(
            'Bucket' => $rawBody['bucket'] ?? "amazon-web-api",
            'Key' => $rawBody['key'] ?? "",
          
        ));
    } catch (\Exception $e) {
        $result['Body'] = null;

    }
    return $result['Body'];

}else{
    return [
        'success'=>false,
        'message'=>'something wrong'
    ];
}
}

public function getAttribute($data){
try {
    if ($shop = $this->getDi()->getRegistry()->getCurrentShop()) {
        $categoryId = isset($data['category_id']) ? $data['category_id'] : '';
        $subCategoryId = isset($data['sub_category_id']) ? $data['sub_category_id'] : '';
        $browseNodeId = isset($data['browse_node_id']) ? $data['browse_node_id'] : false;
        $marketplaceId = isset($shop['marketplace_id']) ? $shop['marketplace_id'] : false;
        if (isset($this::MARKETPLACE_CODE[$marketplaceId])) {
            $key = 'lib'.DS.$this::MARKETPLACE_CODE[$marketplaceId].DS.$data['category_id'].DS.'json'.DS.$data['sub_category_id'].DS.'products.json';
            if($key){
                $browseNodeAttribute = [];
                // / Code added to remove Attributes - If found in BrowserNodeJson - Start /
                $browseNodeAttributesPath ='lib'.DS.$this::MARKETPLACE_CODE[$marketplaceId].DS.'browseNodeAttributes.json';
                if ($browseNodeAttributesPath) {
                    $browseNodeAttributes = $this->getdatafrombucket($browseNodeAttributesPath);
                    $browseNodeAttributes = json_decode($browseNodeAttributes,true);
                    $browseNodeAttribute = isset($browseNodeAttributes[$data['browse_node_id']])?$browseNodeAttributes[$data['browse_node_id']]:[];
                }
                // / Code added to remove Attributes - If found in BrowserNodeJson - End /

                $validValues = [];
                $validValuesPath = 'lib' . DS . $this::MARKETPLACE_CODE[$marketplaceId] . DS . $categoryId . DS . 'json' . DS . 'products_all_valid_values.json';
                if ($validValuesPath) {
                    $validValuesJson = $this->getdatafrombucket($validValuesPath);
                    $validValuesJson = json_decode($validValuesJson,true);
                  
                }

                $variation_theme = [];
                if ($marketplaceId == 'A21TJRUUN4KGV') {
                    $variation_path = 'lib' . DS . $this::MARKETPLACE_CODE[$marketplaceId] . DS . $categoryId . DS . 'json' . DS . $subCategoryId . DS . 'variation_theme.json';
                    if ($variation_path) {
                        $variation_themeJson = $this->getdatafrombucket($variation_path);
                        if($variation_themeJson){
                            $variation_themeJson = json_decode($variation_themeJson,true);
                        } 
                    }
                }
                $content = $this->getdatafrombucket($key);
                $content = json_decode($content,true);
                if(isset($variation_themeJson)){
                    $result = [
                        'success' => true,
                        'data' => $data,
                        'response' => $content,
                        'valid_values' => $validValuesJson,
                        'variation_theme' => $variation_themeJson,
                        'browse_node_attribute' => $browseNodeAttribute,
                    ];
                }else{
                    $result = [
                        'success' => true,
                        'data' => $data,
                        'response' => $content,
                        'valid_values' => $validValuesJson,
                        'browse_node_attribute' => $browseNodeAttribute,
                    ];
                }
              
               


           
            }
            else{
                $result = ['success' => false, 'message' => 'key is missing'];
                
            } 
         } else {
            $result = [
                'success' => false,
                'data' => $data,
                'msg' => "category not found",
            ];
        }

       
        } else {
            $result = [
                'success' => false,
                'data' => $data,
                'msg' => "shop not found",
            ];

        }
        
        return $result;
    } catch (\Exception $e) {
        return [
            'success' => false,
            'data' => $data,
            'msg' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
        ];
    
    }
}