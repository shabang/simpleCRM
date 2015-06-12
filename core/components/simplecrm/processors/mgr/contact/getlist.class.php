<?php
class ContactGetListProcessor extends modObjectGetListProcessor {
    public $classKey = 'Contact';
    public $languageTopics = array('simplecrm:default');
    public $defaultSortField = 'name';
    public $defaultSortDirection = 'ASC';
    public $objectType = 'simplecrm.contact';

    public function prepareQueryBeforeCount(xPDOQuery $c) {
        $query = $this->getProperty('query');
        if (!empty($query)) {
            $c->where(array(
                'name:LIKE' => '%'.$query.'%',
                'OR:description:LIKE' => '%'.$query.'%',
            ));
        }
        return $c;
    }

}
return 'ContactGetListProcessor';