export interface SymptomsData {
  caption: string
  className: string
  symptoms: string[]
}

export const SymptomsTextareaData: SymptomsData[] = [
  {
    caption: 'Опишіть загальні скарги',
    className: 'conclusion_prev_object_complaints',
    symptoms: []
  },
  {
    caption: 'Опорно рухова система:',
    className: 'conclusion_prev_muscul_sys',
    symptoms: [
      'біль у суглобах',
      'обмеження рухів',
      'хруст у суглобах',
      'порушення опорно-рухової функції'
    ]
  },
  {
    caption: 'Анамнез життя:',
    className: 'conclusion_prev_anamnesis_life',
    symptoms: [
      'ВГ (-)',
      'ВГ (+)А',
      'ВГ (+)В',
      'ВГ (+)С',
      'ТВС (-)',
      'ТВС (+)',
      'холецистектомія',
      'апендиктомія',
      'ІХС',
      'гіпертонічна хвороба',
      'варикозна хвороба',
      'ПТФС',
      'виразкова хвороба',
      'ХОЗЛ',
      'цукровий діабет',
      'гіпотеріоз'
    ]
  },
  {
    caption: 'Загальний стан:',
    className: 'conclusion_prev_object_general_condition',
    symptoms: ['Задовільний', 'Середньої важкості', 'Важкий', 'Вкрай важкий']
  },
  {
    caption: 'Аускультація легень:',
    className: 'conclusion_prev_object_auscultation',
    symptoms: [
      'дихання везикулярне',
      'ослаблене везикулярне',
      'везикулярне з жорстким відтінком',
      'жорстке',
      'бронхіальне',
      'хрипи відсутні',
      'хрипи сухі ',
      'бронхіальне',
      'хрипи вологі'
    ]
  },
  {
    caption: 'Тони серця:',
    className: 'conclusion_prev_object_heart',
    symptoms: [
      'ритмічні',
      'аритмічні ',
      'ясні',
      'ослаблені',
      'акцент 2-го тону над аортою',
      'легеневою артерією'
    ]
  },
  {
    caption: 'Язик:',
    className: 'conclusion_prev_object_tongue',
    symptoms: [
      'вологий',
      'сухий',
      'чистий',
      'обкладений білим нальотом',
      'обкладений сірим нальотом',
      'обкладений жовтим нальотом',
      'обкладений коричневим нальотом',
      'з відбитками зубів',
      'малиновий'
    ]
  },
  {
    caption: 'Шкіра та видимі слизові:',
    className: 'conclusion_prev_object_membranes',
    symptoms: [
      'звичайної вологості',
      'підвищеної вологості',
      'сухі',
      'звичайного забарвлення',
      'бліді',
      'жовтушні',
      'ціанотичні',
      'акроціаноз',
      'чисті',
      'висип є',
      'висипу немає',
      'набряки є',
      'набряків немає'
    ]
  },
  {
    caption: 'Живіт:',
    className: 'conclusion_prev_object_stomach',
    symptoms: ['м`який', 'напружений', 'болючий', 'не болючий']
  },
  {
    caption: 'Ознаки ураження ЦНС:',
    className: 'conclusion_prev_object_cns',
    symptoms: [
      'тремор верхніх кінцівок',
      'асиметрія носогубних складок',
      'девіація язика вліво',
      'девіація язика вправо',
      'лівобічний геміпарез',
      'правобічний геміпарез',
      'лівобічна геміплегія',
      'правобічна геміплегія',
      'нижній парапарез',
      'нижня параплегія'
    ]
  },
  {
    caption: 'Алергічні реакції:',
    className: 'conclusion_prev_object_allergic',
    symptoms: ['кропивниця', 'набряк Квінки', 'анафілактичний шок']
  }
]
// statusLocalis: { caption: 'Місцевий стан:', className: 'conclusion_prev_object_local_condition'
